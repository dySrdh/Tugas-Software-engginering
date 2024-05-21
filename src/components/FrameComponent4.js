import { useState } from "react";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ onSudahMempunyaiAkunClick }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log({ username, email, password, confirmPassword, userType });
  };

  return (
    <div className={styles.vectorParent}>
      <form onSubmit={handleSignUp} className={styles.dropdownSignUp}>
        <div className={styles.username}>
          <b className={styles.signUp}>Sign Up</b>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Username:</label>
          <input
            type="text"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email:</label>
          <input
            type="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Password:</label>
          <input
            type="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Confirm Password:</label>
          <input
            type="password"
            className={styles.input}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Daftar sebagai:</label>
          <select
            className={styles.input}
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="" disabled>
              - Pilihan -
            </option>
            <option value="owner">Pemilik Bengkel</option>
            <option value="user">Pengguna Biasa</option>
          </select>
        </div>
        <button type="submit" className={styles.signUpButton}>
          Daftar
        </button>
        <div className={styles.loginPrompt}>
          Sudah mempunyai akun?{" "}
          <span onClick={onSudahMempunyaiAkunClick} className={styles.loginLink}>
            Login!
          </span>
        </div>
      </form>
    </div>
  );
};

export default FrameComponent4;
