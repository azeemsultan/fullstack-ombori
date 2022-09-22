import { useEffect, useState } from "react";
import { userApi } from "../api/fetchUser";
import { Grid, Avatar, Button, Typography, Divider } from "@mui/material";
import { User } from "../types/users";
import Loading from "./Loader";

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);

  const getAll = async () => {
    try {
      const res = await userApi.getAll(page);
      setIsLoading(true);
      setUsers([...users, ...res?.data]);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } catch (err) {
      setUsers([]);
    }
  };

  const scrollToEnd = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getAll();
  }, [page]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Grid container>
          <Grid
            item
            md={12}
            xs={12}
            style={{
              background: "#D3D3D3",
              padding: "20px 0px 20px 0px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            <Typography variant="h5">Users</Typography>
          </Grid>

          <Grid item md={12} xs={12}>
            <Grid
              item
              md={12}
              xs={12}
              style={{
                height: 600,
                width: "100%",
                overflow: "auto",
                border: "1px solid #e5e5e5",
              }}
            >
              {users?.map((user, index) => (
                <>
                  <div key={index} style={{ display: "flex", margin: 30 }}>
                    <Avatar
                      src={user?.avatar}
                      style={{ height: 50, width: 50 }}
                    />
                    <Typography
                      variant="h6"
                      style={{ padding: 10, marginLeft: 20 }}
                    >
                      {user?.first_name} {user?.last_name}
                    </Typography>
                  </div>
                  <Divider />
                </>
              ))}
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Button onClick={scrollToEnd}>
                  {page >= 2 ? "No more users" : "View more"}
                </Button>
                <Typography>
                  {users?.length === 0 ||
                    users === undefined ||
                    (users === null && "No records found.")}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default Users;
