// function checkUsersValid(goodUsers, submittedUsers) {
//   if (!goodUsers || !submittedUsers) {
//     return
//   }
//     var num = 0
//     for (let i = 0; i < submittedUsers.length; i++) {
//       for (let j = 0; j < goodUsers.length; j++) {
//         if (goodUsers[j].id == submittedUsers[i].id) {
//           num++
//         }
//       }
//     }
//     if (num == goodUsers.length) {
//       return true
//     } else return false
// }
// var submittedUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];
// var goodUsers = [{ id: 2 }, { id: 4 }, { id: 1 }]
// console.log(checkUsersValid(goodUsers, submittedUsers));

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function (submittedUser) {
      return goodUsers.some(function (goodUser) {
          return submittedUser.id == goodUser.id;
      });
  });
  };
}
var goodUser = [{ id: 1 }, { id: 2 }, { id: 3 }];
var testAllValid = checkUsersValid(goodUser);
console.log(testAllValid([{ id: 2 }, { id: 1 }])); 
console.log(testAllValid([{ id: 2 }, { id: 4 }, { id: 1 }])); 