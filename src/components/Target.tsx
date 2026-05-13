import MyButton from "./MyButton";
import "./Target.css";

const Target = () => {

  const user = {
    name: "Abraham",
    email: "abraham.galvez.vives@gmail.com",
    age: 28,
    imageUrl:
      "https://avatars.githubusercontent.com/u/154621378?s=400&u=6ef65070fc932d2419aa0a9839ad0e348a669488&v=4",
    loggedIn: false
  };



  return (
    <div className="target">
      <img src={user.imageUrl} className="userImg" alt="User image" />

      <div className="targetInfo">
        <p>Name: {user.name}</p>
        <p>Edad: {user.age}</p>
        <p>Email: {user.email}</p>
        <MyButton />
      </div>
    </div>
  );
};

export default Target;
