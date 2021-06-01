import {useState}  from "react"

export const LogoutButton = () => {

  const [loggedOut, setLoggedOut] = useState(false)

  const logout = () => {
   // localStorage.removeItem("whpf_user")
    setLoggedOut(true)

  };

  if (loggedOut) {
    return <Redirect to="/login" push={true} />
  }

  return <Button onClick={logout}>LogOut</Button>;
};
