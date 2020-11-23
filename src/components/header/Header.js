import React from "react";
import "./Header.css";
export default function Header() {
  const [isToggleOn, setIsToggleOn] = React.useState(false);
  const handleToggleClick = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div className="header-container">
      <div className="header">
        <div className="logo-wrapper">
          <div className="logo">
            <img
              className="image"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICB3aWR0aD0iMTA4cHgiIGhlaWdodD0iMTdweCIgdmlld0JveD0iMCAwIDEwOCAxNyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTA4IDE3IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0iIzJBNzNDQyIgZD0iTTU0LjI4MSw1Ljc3M2MwLjA2Ni0xLjI2OSwwLjUyMS0yLjMwNiwxLjIzMi0zLjExNVYxLjU4aC0wLjk0NWMtMS45MSwwLTMuNTI3LDAuNzMyLTQuNDY3LDIuMzg2aC0wLjA1NQogIFYxLjc2MmgtNC44OTl2MTMuNDQxaDQuOVY5Ljc3N2MwLTIuMzAzLDAuNjc0LTQuMDU5LDMuMzkzLTQuMDU5QzUzLjczNiw1LjcyLDU0LjAxMyw1LjczNyw1NC4yODEsNS43NzN6Ii8+CjxwYXRoIGZpbGw9IiMyQTczQ0MiIGQ9Ik05MS4zOCw1LjcyNGMwLjQwNy0xLjE4OCwxLjA2Ny0yLjI0NiwxLjkyNS0zLjA5NXYtMS4wNWgtMC45NDNjLTEuOTExLDAtMy41MjYsMC43MzItNC40NzEsMi4zODVoLTAuMDUzCiAgVjEuNzYyaC00LjkwMnYxMy40NDFoNC45MDJWOS43NzdjMC0yLjMwMywwLjY3Ni00LjA1OSwzLjM5NS00LjA1OUw5MS4zOCw1LjcyNHoiLz4KPHBhdGggZmlsbD0iIzJBNzNDQyIgZD0iTTY0LjIzMiw1LjIyYy0wLjc1Ni0wLjM5My0xLjgwOC0wLjY1NS0yLjY0NS0wLjY1NWMtMC41NjIsMC0xLjUzMywwLjIzNC0xLjUzMywwLjkxNwogIGMwLDAuOTE4LDEuNTMzLDEuMDQ4LDIuMjExLDEuMTgyYzIuMjg0LDAuNDQ0LDQuMDEyLDEuNDkzLDQuMDEyLDMuOTc5YzAsMy41MzYtMy4zMTMsNS4wMDgtNi41Miw1LjAwOAogIGMtMS45NjcsMC0zLjkwMi0wLjU1MS01LjU3NC0xLjU0N2wxLjc3Ny0zLjMzYzAuOTk1LDAuNjg0LDIuNjY1LDEuMzYzLDMuODc3LDEuMzYzYzAuNjIsMCwxLjUzNS0wLjI4NywxLjUzNS0xLjAyMQogIGMwLTEuMDQ4LTEuNTM1LTEuMTAzLTMuMDcyLTEuNDk1Yy0xLjUzMy0wLjM5My0zLjA2Ni0xLjEyNS0zLjA2Ni0zLjUzNmMwLTMuMzAyLDMuMDY2LTQuNzY3LDYuMDg4LTQuNzY3CiAgYzEuNTYyLDAsMy4xMjUsMC4yMzUsNC41NDksMC44NjRMNjQuMjMyLDUuMjJ6Ii8+CjxwYXRoIGZpbGw9IiMyQTczQ0MiIGQ9Ik0xMDgsMTUuMjAzaC00Ljl2LTEuNDk1aC0wLjA1NGMtMC44NjIsMS4zMzYtMi41NjIsMS45MzgtNC4xNzUsMS45MzhjLTQuMDk2LDAtNi45NzUtMy4zMjgtNi45NzUtNy4xOAogIGMwLTMuODQ4LDIuODI4LTcuMTUxLDYuOTItNy4xNTFjMS41ODgsMCwzLjI2LDAuNTc2LDQuMjgzLDEuNzU0VjEuNzYyaDQuODk5TDEwOCwxNS4yMDNMMTA4LDE1LjIwM3ogTTk2Ljk1OSw4LjQ5NQogIGMwLDEuNzAyLDEuMTYsMy4wMTIsMy4xNSwzLjAxMmMxLjk5MiwwLDMuMTQ3LTEuMzA4LDMuMTQ3LTMuMDEyYzAtMS42NTEtMS4xNTUtMy4wMzktMy4xNDctMy4wMzkKICBDOTguMTE5LDUuNDU3LDk2Ljk1OSw2Ljg0NCw5Ni45NTksOC40OTV6Ii8+CjxwYXRoIGZpbGw9IiMyQTczQ0MiIGQ9Ik04Mi4xNjMsOS4yODNINzEuODQ2YzAsMS45MzcsMS4wNTMsMi45ODQsMy4wNzIsMi45ODRjMS4wNSwwLDEuODAzLTAuMzM5LDIuMzQzLTEuMjMxaDQuNzE0CiAgYy0wLjc4MSwzLjE3MS0zLjg3OSw0LjYxMi03LjAyOSw0LjYxMmMtNC41NzUsMC03Ljk5NS0yLjUxNy03Ljk5NS03LjE1MmMwLTQuNDgsMy4xNDctNy4xNzgsNy42NDQtNy4xNzgKICBjNC43OTMsMCw3LjU3LDIuODgzLDcuNTcsNy40NjZMODIuMTYzLDkuMjgzTDgyLjE2Myw5LjI4M3ogTTc3LjYxMSw2LjUzYy0wLjI0My0xLjI4NC0xLjQ1NS0yLjEyMi0yLjc3My0yLjEyMgogIGMtMS40MjksMC0yLjYwOSwwLjczMS0yLjkxLDIuMTIySDc3LjYxMXoiLz4KPGc+CiAgPGc+CiAgICA8cGF0aCBmaWxsPSIjMkE3M0NDIiBkPSJNMjkuNTYxLDguMjYxYy0wLjAwNS0wLjExNi0wLjAxMy0wLjIyOS0wLjAyMi0wLjM0NGMwLDAsMC0wLjAwMSwwLTAuMDAyYzAsMCwwLTAuMDAxLDAtMC4wMDIKICAgICAgYy0wLjExLTEuMjQ3LTAuNTIyLTIuNDE0LTEuMjIxLTMuNDY4Yy0wLjMxMi0wLjQ3LTAuNjY5LTAuODk3LTEuMDY4LTEuMjhjLTAuNTgzLTAuNTYxLTEuMjU4LTEuMDI1LTIuMDE5LTEuMzkyCiAgICAgIGMtMS4xNDUtMC41NDctMi40MS0wLjgyMy0zLjc2LTAuODIzYy0wLjEzMiwwLTAuMjcsMC4wMDItMC40MDksMC4wMDdDMjAuMTE0LDEsMTkuMTk3LDEuMTgsMTguMzM1LDEuNDk3CiAgICAgIGMtMC44NjksMC4zMTQtMS42MjYsMC43MjktMi4yNDUsMS4yMjdjLTAuMTI2LDAuMS0wLjI2MywwLjIyMy0wLjQxLDAuMzU4bC0wLjEwNiwwLjEwNEwxNS40MjksMy4zNGgwLjAwMWgwLjAwMWwtMC4wNjgsMC4wNjcKICAgICAgTDE1LjMzLDMuNDQzbC0wLjE3MywwLjE4MmMtMC4xMjgsMC4xNDQtMC4yNSwwLjI4OC0wLjM2NCwwLjQyOWwtMC4wMDEtMC4wMDJsLTAuMDA0LTAuMDA0Yy0wLjIzNywwLjI4OC0wLjQ1NiwwLjU4Ni0wLjYxNywwLjg1NAogICAgICBjLTAuMTA5LDAuMTcyLTAuMjE2LDAuMzQ5LTAuMzE4LDAuNTI2TDEyLjQ0LDguMjg1bDAuMDAyLDAuMDAybC0wLjA3NCwwLjE0NWwtMC4xNTYsMC4zMTZjLTAuMzEsMC42MjctMC42NDIsMS4yNTItMS4wMTMsMS43NjgKICAgICAgYy0wLjgyNywwLjkwNy0xLjc2MiwxLjM1MS0yLjk2NCwxLjM1MWMtMC4wODQsMC0wLjE3LTAuMDA0LTAuMjU4LTAuMDA5Yy0wLjcyNC0wLjAyOS0xLjM0NS0wLjItMS44OTYtMC41MjYKICAgICAgYy0wLjA1OS0wLjAzNS0wLjExNi0wLjA3MS0wLjE3MS0wLjEwOGMtMC40NS0wLjI5OS0wLjc5NS0wLjY4My0xLjA1My0xLjE2MmMtMC4yOTEtMC41NDMtMC40Mi0xLjA5OC0wLjQwMi0xLjY4NgogICAgICBDNC40NTYsOC4zNiw0LjQ1Nyw4LjM0Niw0LjQ1Nyw4LjMzM0M0LjQ5Niw3LjM5Nyw0Ljg1Myw2LjY2OSw1LjU3Miw2LjA0QzUuNzQ3LDUuODg5LDUuOTMsNS43NjEsNi4xMjEsNS42NDcKICAgICAgYzAuMDI3LTAuMDE2LDAuMDU0LTAuMDMxLDAuMDgxLTAuMDQ1YzAuNTM0LTAuMjkxLDEuMTQyLTAuNDM2LDEuODM5LTAuNDM2bDAuMjE3LDAuMDA2QzkuMzY1LDUuMjE0LDEwLjIxOSw1LjU2LDEwLjksNi4yMzUKICAgICAgTDEzLjAzNiwyLjRjLTAuNTExLTAuMzQyLTEuMDg4LTAuNjM2LTEuNzI0LTAuODc1Yy0wLjAyNC0wLjAwOS0wLjA0OS0wLjAxOS0wLjA3NC0wLjAyN2MtMC4wNzYtMC4wMjctMC4xNTEtMC4wNTUtMC4yMjktMC4wOAogICAgICBDMTAuMzMzLDEuMTkyLDkuNjI0LDEuMDUzLDguODk0LDAuOTlsMCwwQzguODc2LDAuOTg3LDguODU2LDAuOTg1LDguODM4LDAuOTgzQzguNzI2LDAuOTc2LDguNjEyLDAuOTYyLDguNSwwLjk1NwogICAgICBDOC4zNzgsMC45NTIsOC4yNTUsMC45NSw4LjEzNSwwLjk0OUg4LjA2NmMtMS4zNDMsMC4wMDUtMi41OTEsMC4yOC0zLjczMiwwLjgyNUMzLjA1NiwyLjM5LDIuMDIsMy4yODcsMS4yNTIsNC40NDMKICAgICAgQzAuNDg2LDUuNTk5LDAuMDY4LDYuODgyLDAuMDA4LDguMjU5QzAuMDAzLDguMzc3LDAsOC40OTQsMCw4LjYwOWMtMC4wMDEsMS45MjYsMC43MDEsMy42MiwyLjA5Nyw1LjA0MgogICAgICBjMS40NTcsMS40OTIsMy4zNTIsMi4yOTYsNS42MjcsMi4zOTFjMC4xNDYsMC4wMDYsMC4yOSwwLjAxLDAuNDM0LDAuMDFjMS4yODcsMCwyLjQ3OC0wLjIyOSwzLjU0Ni0wLjY4NwogICAgICBjMC4yNjctMC4xMTQsMC41MjYtMC4yNDgsMC43OTEtMC4zOTdjMC4xNDQtMC4wODMsMC4yOC0wLjE3MSwwLjQxNS0wLjI2NWwwLjEtMC4wNjdsMC4xNjgtMC4xMTUKICAgICAgYzAuMjAyLTAuMTQ1LDAuMzkxLTAuMzAyLDAuNTc1LTAuNDY5bDAuMDY0LTAuMDYxYzAuMTA4LTAuMTAzLDAuMjE2LTAuMjA3LDAuMzE4LTAuMzE0bDAuMzgzLTAuNDMzbDAuMTQ2LTAuMTgzbDAuMDY4LTAuMQogICAgICBsMC4wNjgtMC4wOThjMC41NjktMC45NTYsMi40MjEtNC40MzUsMi40MjEtNC40MzVWOC40MjFsMC4xMS0wLjIxMmwwLjA5Mi0wLjE2NmMwLjI3My0wLjQ5NywwLjQ3LTAuODUsMC43MzEtMS4yMjFsMC4wMDctMC4wMTEKICAgICAgYzAuNjA5LTAuODgzLDEuNjU2LTEuNTEyLDIuODktMS42MThjMi4wNy0wLjE3OCwzLjg4NCwxLjE4Miw0LjA1MSwzLjAzOGMwLjE2NiwxLjg1Ni0xLjM3OCwzLjUwNS0zLjQ0OCwzLjY4NAogICAgICBjLTAuNDMxLDAuMDM3LTAuODUsMC4wMDgtMS4yNDUtMC4wNzlsLTAuMDEsMC4wMDRjLTEuNTE5LTAuMzE2LTIuNDg2LTEuNDI0LTIuOTYzLTEuOTE5bC0xLjk5MiwzLjY2MwogICAgICBjMCwwLDAuNjE5LDAuNjI0LDEuMDQzLDAuOTM2YzAuNDI1LDAuMzExLDAuOTc0LDAuNjE3LDEuNDEyLDAuODA3YzEuMDYzLDAuNDU0LDIuMjE5LDAuNzI2LDMuNDk2LDAuNzI2CiAgICAgIGMwLjE0OCwwLDAuMTE4LDAsMC4yNzItMC4wMDZjMi4yNzMtMC4wOTUsNC4yOTktMC45NjYsNS43Ni0yLjQ1OGMxLjM4NC0xLjQxNywyLjEzNS0zLjAzNSwyLjE0Mi00Ljk1VjguNTgyCiAgICAgIEMyOS41NjgsOC40NzYsMjkuNTY1LDguMzY5LDI5LjU2MSw4LjI2MXoiLz4KICA8L2c+CjwvZz4KPGc+CiAgPHBhdGggZmlsbD0iIzJBNzNDQyIgZD0iTTM3LjE4MSwxNS42NTdjLTEuMDMzLDAtMS45Ny0wLjEyLTIuODExLTAuMzZjLTAuODQxLTAuMjQtMS41NTktMC42MTktMi4xNTQtMS4xMzkKICAgIGMtMC41OTctMC41Mi0xLjA1Ny0xLjE4Mi0xLjM4MS0xLjk4NXMtMC40ODYtMS43NzEtMC40ODYtMi44OTlWMS43NTloNC43Mjd2Ny40NTVjMCwwLjg0NSwwLjIwMiwxLjQ1NywwLjYwNSwxLjgzOQogICAgYzAuNDA0LDAuMzgzLDAuOTE3LDAuNTc0LDEuNTM5LDAuNTc0YzAuNjM2LDAsMS4xNTItMC4xNzgsMS41NS0wLjUzNWMwLjM5Ni0wLjM1NywwLjU5Ni0wLjk0OSwwLjU5Ni0xLjc4MVYxLjc1OWg0LjcyN3Y3LjQxNgogICAgYzAsMS4xNjgtMC4xNjYsMi4xNjEtMC40OTcsMi45NzhjLTAuMzMxLDAuODE4LTAuNzk4LDEuNDg2LTEuMzk5LDIuMDA2Yy0wLjYwNCwwLjUyLTEuMzMxLDAuODk4LTIuMTg2LDEuMTM5CiAgICBDMzkuMTU2LDE1LjUzNywzOC4yMTMsMTUuNjU3LDM3LjE4MSwxNS42NTd6Ii8+CjwvZz4KPC9zdmc+"
              alt="coursera-logo"
            />
          </div>
        </div>
        <div className="explore-search-container">
          <div className="explore-container">
            <div>
              <button className="explore-button">
                <span className="explore-label">Explore</span>
              </button>
            </div>
          </div>
          <div className="search-button-container">
            <div className="search-container">
              <input
                type="text"
                className="search"
                placeholder="What do you want to learn?"
              />
            </div>
            <div className="search-icon-container">
              <button className="search-button">
                <div className="search-svg-container">
                  <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                      transform="translate(-293.000000, -23.000000)"
                    >
                      <g fill="#E1E1E1">
                        <g transform="translate(293.000000, 22.000000)">
                          <path d="M11.355485,11.4503883 L16.0066609,16.1015642 L15.1015642,17.0066609 L10.4503883,12.355485 C9.34711116,13.2583262 7.93681293,13.8 6.4,13.8 C2.8653776,13.8 0,10.9346224 0,7.4 C0,3.8653776 2.8653776,1 6.4,1 C9.9346224,1 12.8,3.8653776 12.8,7.4 C12.8,8.93681293 12.2583262,10.3471112 11.355485,11.4503883 Z M6.4,12.52 C9.22769792,12.52 11.52,10.2276979 11.52,7.4 C11.52,4.57230208 9.22769792,2.28 6.4,2.28 C3.57230208,2.28 1.28,4.57230208 1.28,7.4 C1.28,10.2276979 3.57230208,12.52 6.4,12.52 Z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="header-right-wrapper">
            <span className="enterprise-container">
              <span className="enterprise">For Enterprise</span>
            </span>
            <span className="student-container">
              <span className="student">For student</span>
            </span>
            <span className="login-container">
              <span className="login">Login</span>
            </span>
            <span className="join-for-free-container">
              <span className="join-for-free">Join for Free</span>
            </span>
          </div>
        </div>
      </div>
      <div className="mobile-header-container">
        <div className="mobile-container">
          <div className="mobile-header-btn-container">
            <span>
              <nav>
                <button onClick={handleToggleClick} className="toggle-button">
                  <svg
                    fill="#1F1F1F"
                    className="svg"
                    viewBox="0 0 48 48"
                    role="img"
                    aria-labelledby="List5361f1de-ab5d-48a7-bf12-7cedb15a4e4a List5361f1de-ab5d-48a7-bf12-7cedb15a4e4aDesc"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title id="List5361f1de-ab5d-48a7-bf12-7cedb15a4e4a">
                      List
                    </title>
                    <polygon
                      points="0 2 38 2 38 0 0 0"
                      role="presentation"
                    ></polygon>
                    <polygon
                      points="0 16 38 16 38 14 0 14"
                      role="presentation"
                    ></polygon>
                    <polygon
                      points="0 30 38 30 38 28 0 28"
                      role="presentation"
                    ></polygon>
                  </svg>
                </button>
              </nav>
            </span>
            <a className="mobile-header-logo">
              <div className="mobile-logo">
                <img
                  className="image"
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICB3aWR0aD0iMTA4cHgiIGhlaWdodD0iMTdweCIgdmlld0JveD0iMCAwIDEwOCAxNyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTA4IDE3IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0iIzJBNzNDQyIgZD0iTTU0LjI4MSw1Ljc3M2MwLjA2Ni0xLjI2OSwwLjUyMS0yLjMwNiwxLjIzMi0zLjExNVYxLjU4aC0wLjk0NWMtMS45MSwwLTMuNTI3LDAuNzMyLTQuNDY3LDIuMzg2aC0wLjA1NQogIFYxLjc2MmgtNC44OTl2MTMuNDQxaDQuOVY5Ljc3N2MwLTIuMzAzLDAuNjc0LTQuMDU5LDMuMzkzLTQuMDU5QzUzLjczNiw1LjcyLDU0LjAxMyw1LjczNyw1NC4yODEsNS43NzN6Ii8+CjxwYXRoIGZpbGw9IiMyQTczQ0MiIGQ9Ik05MS4zOCw1LjcyNGMwLjQwNy0xLjE4OCwxLjA2Ny0yLjI0NiwxLjkyNS0zLjA5NXYtMS4wNWgtMC45NDNjLTEuOTExLDAtMy41MjYsMC43MzItNC40NzEsMi4zODVoLTAuMDUzCiAgVjEuNzYyaC00LjkwMnYxMy40NDFoNC45MDJWOS43NzdjMC0yLjMwMywwLjY3Ni00LjA1OSwzLjM5NS00LjA1OUw5MS4zOCw1LjcyNHoiLz4KPHBhdGggZmlsbD0iIzJBNzNDQyIgZD0iTTY0LjIzMiw1LjIyYy0wLjc1Ni0wLjM5My0xLjgwOC0wLjY1NS0yLjY0NS0wLjY1NWMtMC41NjIsMC0xLjUzMywwLjIzNC0xLjUzMywwLjkxNwogIGMwLDAuOTE4LDEuNTMzLDEuMDQ4LDIuMjExLDEuMTgyYzIuMjg0LDAuNDQ0LDQuMDEyLDEuNDkzLDQuMDEyLDMuOTc5YzAsMy41MzYtMy4zMTMsNS4wMDgtNi41Miw1LjAwOAogIGMtMS45NjcsMC0zLjkwMi0wLjU1MS01LjU3NC0xLjU0N2wxLjc3Ny0zLjMzYzAuOTk1LDAuNjg0LDIuNjY1LDEuMzYzLDMuODc3LDEuMzYzYzAuNjIsMCwxLjUzNS0wLjI4NywxLjUzNS0xLjAyMQogIGMwLTEuMDQ4LTEuNTM1LTEuMTAzLTMuMDcyLTEuNDk1Yy0xLjUzMy0wLjM5My0zLjA2Ni0xLjEyNS0zLjA2Ni0zLjUzNmMwLTMuMzAyLDMuMDY2LTQuNzY3LDYuMDg4LTQuNzY3CiAgYzEuNTYyLDAsMy4xMjUsMC4yMzUsNC41NDksMC44NjRMNjQuMjMyLDUuMjJ6Ii8+CjxwYXRoIGZpbGw9IiMyQTczQ0MiIGQ9Ik0xMDgsMTUuMjAzaC00Ljl2LTEuNDk1aC0wLjA1NGMtMC44NjIsMS4zMzYtMi41NjIsMS45MzgtNC4xNzUsMS45MzhjLTQuMDk2LDAtNi45NzUtMy4zMjgtNi45NzUtNy4xOAogIGMwLTMuODQ4LDIuODI4LTcuMTUxLDYuOTItNy4xNTFjMS41ODgsMCwzLjI2LDAuNTc2LDQuMjgzLDEuNzU0VjEuNzYyaDQuODk5TDEwOCwxNS4yMDNMMTA4LDE1LjIwM3ogTTk2Ljk1OSw4LjQ5NQogIGMwLDEuNzAyLDEuMTYsMy4wMTIsMy4xNSwzLjAxMmMxLjk5MiwwLDMuMTQ3LTEuMzA4LDMuMTQ3LTMuMDEyYzAtMS42NTEtMS4xNTUtMy4wMzktMy4xNDctMy4wMzkKICBDOTguMTE5LDUuNDU3LDk2Ljk1OSw2Ljg0NCw5Ni45NTksOC40OTV6Ii8+CjxwYXRoIGZpbGw9IiMyQTczQ0MiIGQ9Ik04Mi4xNjMsOS4yODNINzEuODQ2YzAsMS45MzcsMS4wNTMsMi45ODQsMy4wNzIsMi45ODRjMS4wNSwwLDEuODAzLTAuMzM5LDIuMzQzLTEuMjMxaDQuNzE0CiAgYy0wLjc4MSwzLjE3MS0zLjg3OSw0LjYxMi03LjAyOSw0LjYxMmMtNC41NzUsMC03Ljk5NS0yLjUxNy03Ljk5NS03LjE1MmMwLTQuNDgsMy4xNDctNy4xNzgsNy42NDQtNy4xNzgKICBjNC43OTMsMCw3LjU3LDIuODgzLDcuNTcsNy40NjZMODIuMTYzLDkuMjgzTDgyLjE2Myw5LjI4M3ogTTc3LjYxMSw2LjUzYy0wLjI0My0xLjI4NC0xLjQ1NS0yLjEyMi0yLjc3My0yLjEyMgogIGMtMS40MjksMC0yLjYwOSwwLjczMS0yLjkxLDIuMTIySDc3LjYxMXoiLz4KPGc+CiAgPGc+CiAgICA8cGF0aCBmaWxsPSIjMkE3M0NDIiBkPSJNMjkuNTYxLDguMjYxYy0wLjAwNS0wLjExNi0wLjAxMy0wLjIyOS0wLjAyMi0wLjM0NGMwLDAsMC0wLjAwMSwwLTAuMDAyYzAsMCwwLTAuMDAxLDAtMC4wMDIKICAgICAgYy0wLjExLTEuMjQ3LTAuNTIyLTIuNDE0LTEuMjIxLTMuNDY4Yy0wLjMxMi0wLjQ3LTAuNjY5LTAuODk3LTEuMDY4LTEuMjhjLTAuNTgzLTAuNTYxLTEuMjU4LTEuMDI1LTIuMDE5LTEuMzkyCiAgICAgIGMtMS4xNDUtMC41NDctMi40MS0wLjgyMy0zLjc2LTAuODIzYy0wLjEzMiwwLTAuMjcsMC4wMDItMC40MDksMC4wMDdDMjAuMTE0LDEsMTkuMTk3LDEuMTgsMTguMzM1LDEuNDk3CiAgICAgIGMtMC44NjksMC4zMTQtMS42MjYsMC43MjktMi4yNDUsMS4yMjdjLTAuMTI2LDAuMS0wLjI2MywwLjIyMy0wLjQxLDAuMzU4bC0wLjEwNiwwLjEwNEwxNS40MjksMy4zNGgwLjAwMWgwLjAwMWwtMC4wNjgsMC4wNjcKICAgICAgTDE1LjMzLDMuNDQzbC0wLjE3MywwLjE4MmMtMC4xMjgsMC4xNDQtMC4yNSwwLjI4OC0wLjM2NCwwLjQyOWwtMC4wMDEtMC4wMDJsLTAuMDA0LTAuMDA0Yy0wLjIzNywwLjI4OC0wLjQ1NiwwLjU4Ni0wLjYxNywwLjg1NAogICAgICBjLTAuMTA5LDAuMTcyLTAuMjE2LDAuMzQ5LTAuMzE4LDAuNTI2TDEyLjQ0LDguMjg1bDAuMDAyLDAuMDAybC0wLjA3NCwwLjE0NWwtMC4xNTYsMC4zMTZjLTAuMzEsMC42MjctMC42NDIsMS4yNTItMS4wMTMsMS43NjgKICAgICAgYy0wLjgyNywwLjkwNy0xLjc2MiwxLjM1MS0yLjk2NCwxLjM1MWMtMC4wODQsMC0wLjE3LTAuMDA0LTAuMjU4LTAuMDA5Yy0wLjcyNC0wLjAyOS0xLjM0NS0wLjItMS44OTYtMC41MjYKICAgICAgYy0wLjA1OS0wLjAzNS0wLjExNi0wLjA3MS0wLjE3MS0wLjEwOGMtMC40NS0wLjI5OS0wLjc5NS0wLjY4My0xLjA1My0xLjE2MmMtMC4yOTEtMC41NDMtMC40Mi0xLjA5OC0wLjQwMi0xLjY4NgogICAgICBDNC40NTYsOC4zNiw0LjQ1Nyw4LjM0Niw0LjQ1Nyw4LjMzM0M0LjQ5Niw3LjM5Nyw0Ljg1Myw2LjY2OSw1LjU3Miw2LjA0QzUuNzQ3LDUuODg5LDUuOTMsNS43NjEsNi4xMjEsNS42NDcKICAgICAgYzAuMDI3LTAuMDE2LDAuMDU0LTAuMDMxLDAuMDgxLTAuMDQ1YzAuNTM0LTAuMjkxLDEuMTQyLTAuNDM2LDEuODM5LTAuNDM2bDAuMjE3LDAuMDA2QzkuMzY1LDUuMjE0LDEwLjIxOSw1LjU2LDEwLjksNi4yMzUKICAgICAgTDEzLjAzNiwyLjRjLTAuNTExLTAuMzQyLTEuMDg4LTAuNjM2LTEuNzI0LTAuODc1Yy0wLjAyNC0wLjAwOS0wLjA0OS0wLjAxOS0wLjA3NC0wLjAyN2MtMC4wNzYtMC4wMjctMC4xNTEtMC4wNTUtMC4yMjktMC4wOAogICAgICBDMTAuMzMzLDEuMTkyLDkuNjI0LDEuMDUzLDguODk0LDAuOTlsMCwwQzguODc2LDAuOTg3LDguODU2LDAuOTg1LDguODM4LDAuOTgzQzguNzI2LDAuOTc2LDguNjEyLDAuOTYyLDguNSwwLjk1NwogICAgICBDOC4zNzgsMC45NTIsOC4yNTUsMC45NSw4LjEzNSwwLjk0OUg4LjA2NmMtMS4zNDMsMC4wMDUtMi41OTEsMC4yOC0zLjczMiwwLjgyNUMzLjA1NiwyLjM5LDIuMDIsMy4yODcsMS4yNTIsNC40NDMKICAgICAgQzAuNDg2LDUuNTk5LDAuMDY4LDYuODgyLDAuMDA4LDguMjU5QzAuMDAzLDguMzc3LDAsOC40OTQsMCw4LjYwOWMtMC4wMDEsMS45MjYsMC43MDEsMy42MiwyLjA5Nyw1LjA0MgogICAgICBjMS40NTcsMS40OTIsMy4zNTIsMi4yOTYsNS42MjcsMi4zOTFjMC4xNDYsMC4wMDYsMC4yOSwwLjAxLDAuNDM0LDAuMDFjMS4yODcsMCwyLjQ3OC0wLjIyOSwzLjU0Ni0wLjY4NwogICAgICBjMC4yNjctMC4xMTQsMC41MjYtMC4yNDgsMC43OTEtMC4zOTdjMC4xNDQtMC4wODMsMC4yOC0wLjE3MSwwLjQxNS0wLjI2NWwwLjEtMC4wNjdsMC4xNjgtMC4xMTUKICAgICAgYzAuMjAyLTAuMTQ1LDAuMzkxLTAuMzAyLDAuNTc1LTAuNDY5bDAuMDY0LTAuMDYxYzAuMTA4LTAuMTAzLDAuMjE2LTAuMjA3LDAuMzE4LTAuMzE0bDAuMzgzLTAuNDMzbDAuMTQ2LTAuMTgzbDAuMDY4LTAuMQogICAgICBsMC4wNjgtMC4wOThjMC41NjktMC45NTYsMi40MjEtNC40MzUsMi40MjEtNC40MzVWOC40MjFsMC4xMS0wLjIxMmwwLjA5Mi0wLjE2NmMwLjI3My0wLjQ5NywwLjQ3LTAuODUsMC43MzEtMS4yMjFsMC4wMDctMC4wMTEKICAgICAgYzAuNjA5LTAuODgzLDEuNjU2LTEuNTEyLDIuODktMS42MThjMi4wNy0wLjE3OCwzLjg4NCwxLjE4Miw0LjA1MSwzLjAzOGMwLjE2NiwxLjg1Ni0xLjM3OCwzLjUwNS0zLjQ0OCwzLjY4NAogICAgICBjLTAuNDMxLDAuMDM3LTAuODUsMC4wMDgtMS4yNDUtMC4wNzlsLTAuMDEsMC4wMDRjLTEuNTE5LTAuMzE2LTIuNDg2LTEuNDI0LTIuOTYzLTEuOTE5bC0xLjk5MiwzLjY2MwogICAgICBjMCwwLDAuNjE5LDAuNjI0LDEuMDQzLDAuOTM2YzAuNDI1LDAuMzExLDAuOTc0LDAuNjE3LDEuNDEyLDAuODA3YzEuMDYzLDAuNDU0LDIuMjE5LDAuNzI2LDMuNDk2LDAuNzI2CiAgICAgIGMwLjE0OCwwLDAuMTE4LDAsMC4yNzItMC4wMDZjMi4yNzMtMC4wOTUsNC4yOTktMC45NjYsNS43Ni0yLjQ1OGMxLjM4NC0xLjQxNywyLjEzNS0zLjAzNSwyLjE0Mi00Ljk1VjguNTgyCiAgICAgIEMyOS41NjgsOC40NzYsMjkuNTY1LDguMzY5LDI5LjU2MSw4LjI2MXoiLz4KICA8L2c+CjwvZz4KPGc+CiAgPHBhdGggZmlsbD0iIzJBNzNDQyIgZD0iTTM3LjE4MSwxNS42NTdjLTEuMDMzLDAtMS45Ny0wLjEyLTIuODExLTAuMzZjLTAuODQxLTAuMjQtMS41NTktMC42MTktMi4xNTQtMS4xMzkKICAgIGMtMC41OTctMC41Mi0xLjA1Ny0xLjE4Mi0xLjM4MS0xLjk4NXMtMC40ODYtMS43NzEtMC40ODYtMi44OTlWMS43NTloNC43Mjd2Ny40NTVjMCwwLjg0NSwwLjIwMiwxLjQ1NywwLjYwNSwxLjgzOQogICAgYzAuNDA0LDAuMzgzLDAuOTE3LDAuNTc0LDEuNTM5LDAuNTc0YzAuNjM2LDAsMS4xNTItMC4xNzgsMS41NS0wLjUzNWMwLjM5Ni0wLjM1NywwLjU5Ni0wLjk0OSwwLjU5Ni0xLjc4MVYxLjc1OWg0LjcyN3Y3LjQxNgogICAgYzAsMS4xNjgtMC4xNjYsMi4xNjEtMC40OTcsMi45NzhjLTAuMzMxLDAuODE4LTAuNzk4LDEuNDg2LTEuMzk5LDIuMDA2Yy0wLjYwNCwwLjUyLTEuMzMxLDAuODk4LTIuMTg2LDEuMTM5CiAgICBDMzkuMTU2LDE1LjUzNywzOC4yMTMsMTUuNjU3LDM3LjE4MSwxNS42NTd6Ii8+CjwvZz4KPC9zdmc+"
                  alt="coursera-logo"
                />
              </div>
            </a>
            <span>
              <ul
                className={
                  isToggleOn ? "mobile-header-menu show" : "mobile-header-menu"
                }
              >
                <a href="#" onClick={handleToggleClick} className="btn-close">
                  &times;
                </a>
                <ul className="mobile-header-menu-child">
                  <div>
                    <li className="mobile-header-btn first">
                      <a href="#">Explore</a>
                    </li>
                    <li className="mobile-header-btn first">
                      <a href="#">For Enterprise</a>
                    </li>
                    <li className="mobile-header-btn first">
                      <a href="#">For Student</a>
                    </li>
                    <li className="mobile-header-btn first">
                      <a href="#">Get Our App</a>
                    </li>
                    <li className="mobile-header-btn first">
                      <a href="#">Join for Free</a>
                    </li>
                    <li className="mobile-header-btn first">
                      <a href="#">Login</a>
                    </li>
                  </div>
                </ul>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
