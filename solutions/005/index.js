import { isPrime } from '../../helpers/numbers.module';

const smallestDiv = (limit) => {
    for (let i = 1; ; i++) {
        if (isPrime(i)) continue;
        for (let j = 1; j <= limit; j++) {
            if (i % j !== 0) continue;

            
        }
    }

    return -1;
}