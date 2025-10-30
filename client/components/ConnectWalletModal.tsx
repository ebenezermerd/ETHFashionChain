import { useEffect, useState } from "react";

export default function ConnectWalletModal({
  open,
  onClose,
  onConnect,
  currentAddress,
}: {
  open: boolean;
  onClose: () => void;
  onConnect: (address: string) => void;
  currentAddress: string | null;
}) {
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    if (!open) setConnecting(false);
  }, [open]);

  if (!open) return null;

  async function connectMetaMask() {
    setConnecting(true);
    try {
      // Try to use window.ethereum if present (no external libs required)
      const anyWin: any = window as any;
      if (anyWin.ethereum) {
        const accounts = await anyWin.ethereum.request({ method: "eth_requestAccounts" });
        const addr = accounts?.[0];
        if (addr) onConnect(addr);
        else alert("No account found in wallet.");
      } else {
        // fallback: create a fake address for demo
        const fake = "0x" + Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10);
        onConnect(fake);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to connect wallet.");
    } finally {
      setConnecting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">Connect Wallet</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">✕</button>
        </div>

        <p className="mt-2 text-sm text-slate-600">Connect your wallet to interact with the ETHFashionChain platform.</p>

        <div className="mt-6 grid gap-3">
          <div className="flex items-center justify-between p-3 rounded-md border">
            <div>
              <div className="font-medium">MetaMask</div>
              <div className="text-xs text-slate-500">Connect with MetaMask extension</div>
            </div>
            <button
              onClick={connectMetaMask}
              disabled={connecting}
              className="px-3 py-1 rounded-md bg-ethiopian-red text-white text-sm hover:opacity-95 disabled:opacity-60"
            >
              {connecting ? "Connecting..." : "Connect"}
            </button>
          </div>

          <div className="flex items-center justify-between p-3 rounded-md border">
            <div>
              <div className="font-medium">Demo Wallet</div>
              <div className="text-xs text-slate-500">Quickly connect a demo address for testing</div>
            </div>
            <button
              onClick={() => onConnect("0xDEMO000000000000000000000000000000000000")}
              className="px-3 py-1 rounded-md bg-ethiopian-yellow text-ethiopian-brown text-sm hover:opacity-95"
            >
              Use Demo
            </button>
          </div>

          {currentAddress && (
            <div className="mt-2 text-sm text-slate-600">Connected: {currentAddress}</div>
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <button onClick={onClose} className="text-sm px-4 py-2 rounded-md border">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
