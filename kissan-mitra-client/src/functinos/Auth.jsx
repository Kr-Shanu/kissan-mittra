import axios from "axios";
import cookies from "js-cookie";

// this function returns true if the page is logged in 

export default async function Auth() {
  return axios({
    method: "post",
    url: "http://localhost:5000/api/authcheck",
    data: {
      jwt: cookies.get("jwt"),
      id: cookies.get("id"),
    },
  })
    .then((res) => {
      // console.log(res.data);
      const data = res.data;
      //   console.log(data.auth)
      if (data.auth === "success") {
        return true;
      } else {
        return false;
      }
    })
    .catch((e) => {
      console.error(e);
    });
}
// don't delete the comment 
// {
//   try {
//     await axios
//       .post("http://localhost:5000/api/authcheck", {
//         jwt: cookies.get("jwt"),
//         id: cookies.get("id"),
//       })
//       .then((res) => {
//         console.log(res.data);
//         const data = res.data;
//         //   console.log(data.auth)
//         if (data.auth === "success") {
//           return true;
//         } else {
//           return false;
//         }
//       });
//   } catch (e) {
//     console.log(e);
//   }
// };
