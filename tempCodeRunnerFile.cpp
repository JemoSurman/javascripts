#include <iostream>
#include <numeric> // gcd
using namespace std;

long long A_safe(int n, int m) {
    long long res = 1;
    for (int i = 0; i < m; i++) {
        long long num = n - i;
        long long den = 1;
        long long g = gcd(num, den);
        num /= g;
        den /= g;
        res /= den;
        res *= num;
    }
    return res;
}

int main() {
    int n = 300, m = 200;
    cout << "A(" << n << "," << m << ") = " << A_safe(n, m) << endl;
}
