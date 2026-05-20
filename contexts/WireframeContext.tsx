import { createContext, useContext, useState, ReactNode } from 'react';

interface WireframeContextType {
  isWireframe: boolean;
  toggleWireframe: () => void;
}

const WireframeContext = createContext<WireframeContextType | undefined>(undefined);

export function WireframeProvider({ children }: { children: ReactNode }) {
  const [isWireframe, setIsWireframe] = useState(false);

  const toggleWireframe = () => {
    setIsWireframe(!isWireframe);
  };

  return (
    <WireframeContext.Provider value={{ isWireframe, toggleWireframe }}>
      <div className={isWireframe ? 'wireframe-mode' : ''}>
        {children}
      </div>
    </WireframeContext.Provider>
  );
}

export function useWireframe() {
  const context = useContext(WireframeContext);
  if (context === undefined) {
    throw new Error('useWireframe must be used within a WireframeProvider');
  }
  return context;
}
