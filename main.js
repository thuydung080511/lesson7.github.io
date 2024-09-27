// Hàm tính tổng từ 1 đến n
function tongTu1DenN() {
    let n = parseInt(document.getElementById("n").value);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    document.getElementById("ketqua1").innerText = "Tổng từ 1 đến " + n + " là: " + sum;
}

// Hàm tính tổng các số chẵn từ 1 đến n
function tongSoChanTu1DenN() {
    let n = parseInt(document.getElementById("n").value);
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }
    document.getElementById("ketqua2").innerText = "Tổng các số chẵn từ 1 đến " + n + " là: " + sum;
}

// Hàm tính tổng các số lẻ từ 1 đến n
function tongSoLeTu1DenN() {
    let n = parseInt(document.getElementById("n").value);
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
        sum += i;
    }
    document.getElementById("ketqua3").innerText = "Tổng các số lẻ từ 1 đến " + n + " là: " + sum;
}

// Hàm kiểm tra n có phải số nguyên tố hay không
function kiemTraNguyenTo() {
    let n = parseInt(document.getElementById("n").value);
    let isPrime = true;

    if (n < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    document.getElementById("ketqua4").innerText = n + " " + (isPrime ? "là số nguyên tố" : "không phải là số nguyên tố");
}

// Hàm tìm UCLN của hai số a và b
function timUCLN() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);

    function UCLN(a, b) {
        while (b !== 0) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    let result = UCLN(a, b);
    document.getElementById("ketqua5").innerText = "UCLN của " + a + " và " + b + " là: " + result;
}