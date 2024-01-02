<script>
    let username = '';
    let password = '';
  
    const handleLogin = async () => {
      // Call an authentication API or perform login logic here
    //   console.log(`Logging in with username: ${username}, password: ${password}`);
    const response = await fetch('./api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('로그인 성공:', data);
      // 로그인 성공 후 처리 로직을 작성하세요.
    } else {
      console.error('로그인 실패:', response.statusText);
      // 로그인 실패 시 처리 로직을 작성하세요.
    }

    username = '';
    password = '';
    };
  </script>
  
  <div class="login-container">
    <img src="./lib/images/back.png" alt="Instagram Logo" />
  
    <form on:submit|preventDefault={handleLogin}>
      <label>
        <input type="text" bind:value={username} placeholder="Username" />
      </label>
  
      <label>
        <input type="password" bind:value={password} placeholder="Password" />
      </label>
  
      <button type="submit">Log In</button>
    </form>
  
    <div class="separator">
      <span>OR</span>
    </div>
  
    <div class="forgot-password">
      <a href="#">Forgot Password?</a>
    </div>
  </div>
  
  <style>
    .login-container {
      max-width: 350px;
      width: 100%;
      text-align: center;
      margin: 0 auto;
    }
  
    img {
      width: 200px;
      margin-bottom: 20px;
    }
  
    form {
      display: flex;
      flex-direction: column;
    }
  
    label {
      margin-bottom: 10px;
    }
  
    input {
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #dbdbdb;
      border-radius: 4px;
      width: 100%;
    }
  
    button {
      padding: 10px;
      background-color: #3897f0;
      color: white;
      cursor: pointer;
      border: none;
      border-radius: 4px;
    }
  
    .separator {
      margin: 20px 0;
      display: flex;
      align-items: center;
      color: #8e8e8e;
    }
  
    .separator span {
      flex: 1;
      height: 1px;
      background-color: #8e8e8e;
      margin: 0 10px;
    }
  
    .forgot-password {
      margin-bottom: 20px;
    }
  
    .forgot-password a {
      color: #00376b;
      text-decoration: none;
    }
  </style>