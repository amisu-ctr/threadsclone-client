import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost like={70} replies={81} postImg='/post1.png' postTitle="Lets's talk about threads" />
      <UserPost like={900} replies={48} postImg='/post2.png' postTitle="Nice tutorail" />
      <UserPost like={120} replies={881} postImg='/post3.png' postTitle="My first this threads" />
    </>
  );
};

export default UserPage;
