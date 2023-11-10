export default function TopBar() {
  return (
    <ul class="nav  nav-fill">
      <li class="nav-item">
        <a class="nav-link disabled" href="/">
          <img
            src="https://avatars.githubusercontent.com/u/119950866?v=4"
            alt="Bootstrap"
            width="30"
            height="24"
          />
          Logo
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/">
          Blogs
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="/">
          <img
            src="https://avatars.githubusercontent.com/u/119950866?v=4"
            alt="Bootstrap"
            width="30"
            height="24"
          />
          Username
        </a>
      </li>
    </ul>
  );
}
