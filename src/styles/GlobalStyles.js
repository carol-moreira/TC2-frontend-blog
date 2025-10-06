import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  :root {
    --dark-brown: #4a2c2a;
    --medium-brown: #8d6e63;
    --primary-pink: #ff8a80;
    --light-pink: #ffcdd2;
    --background-white: #f9f9f9;
    --card-white: #ffffff;
    --light-gray: #e0e0e0; /* Corrigido: typo e0e_0 */
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: var(--background-white);
    color: var(--dark-brown);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden; 
  }

  h1, h2, h3 {
    color: var(--dark-brown);
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
    color: var(--medium-brown);
  }

  a {
    color: var(--primary-pink);
    text-decoration: none;
    font-weight: 600;
  }
  
  main {
    max-width: 960px;
    margin: 24px auto;
    padding: 0 16px;
    max-height: calc(100vh - 177px); 
    overflow-y: auto;
  }

  input, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid var(--light-gray);
    border-radius: 8px;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;

    &:focus {
      outline: none;
      border-color: var(--primary-pink);
      box-shadow: 0 0 0 3px var(--light-pink);
    }
  }
  
  button {
    padding: 12px 20px;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    transition: background-color 0.3s ease;
    
    background-color: var(--primary-pink);
    color: white;

    &:hover {
      background-color: #e57373;
    }
  }

  .card {
    background: var(--card-white);
    border: 1px solid var(--light-gray);
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2.5rem;
    background-color: var(--dark-brown);
    color: var(--background-white);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 65px;

    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;
      cursor: pointer;
    }

    .user-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    button {
      padding: 8px 16px;
      cursor: pointer; 
    }

    a {
      color: var(--background-white);
      font-weight: 600;
      position: relative;
      transition: color 0.3s ease;
      cursor: pointer;

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -5px;
        left: 0;
        background-color: var(--primary-pink);
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.3s ease-out;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
      
      &.active {
        color: var(--primary-pink);
      }
    }
  }
`;

export default GlobalStyle;