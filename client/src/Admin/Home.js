import AdminHeader from "./AdminHeader";
import Post from "./Post";
import Edit from "./Edit";
import Delete from "./Delete";
import Login from "./Login";

function Home() {
  return (
    <div>
      <AdminHeader />
      <Post />
      <Edit />
      <Delete />
      <Login />
    </div>
  );
}

export default Home;
