function validateLogin(event) {
    event.preventDefault(); // Mencegah reload halaman
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validasi
    if (email === "admin@example.com" && password === "admin123") {
      alert("Login berhasil!");
      window.location.href = "menuUtama.html"; // Pindah ke Halaman Menu Utama
    } else {
      alert("Email atau password salah. Silakan coba lagi.");
    }
  }