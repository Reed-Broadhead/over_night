declare module 'crypto' {
    interface Hash {
      update(data: string | Buffer): Hash;
      digest(encoding: 'hex'): string;
    }
  
    function createHash(algorithm: string): Hash;
  }