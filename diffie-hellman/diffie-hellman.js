//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
    constructor(p, g) {
        if (p < 1 || g < 1)
            throw new Error("Arguments must be positive numbers.")
        if (!isPrime(p) || !isPrime(g))
            throw new Error("Arguments must be prime numbers.")

        this.p = p;
        this.g = g;

    }

    getPublicKeyFromPrivateKey(privateKey) {
        if (privateKey < 2 || privateKey >= this.p)
            throw new Error("Private key must be greater than 1 and less than p ")
        return this.g ** privateKey % this.p;
    }

    getSharedSecret(privateKey, publicKey) {
        return publicKey ** privateKey % this.p;
    }
}

function isPrime(number) {
    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0)
            return false;
    }

    return number > 1
}