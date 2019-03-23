module.exports = () => {
  const db = Array.apply(null, { length: 30 }).map((val, i) => ({
    id: i,
    username: "user" + i,
    password: "1234"
  }));
  const privacies = [
    {
      id: 1,
      name: "สาธารณะ",
      type: 1,
      icon: "global"
    },
    {
      id: 2,
      name: "เพื่อน",
      type: 2,
      icon: "user"
    },
    {
      id: 3,
      name: "เฉพาะฉัน",
      type: 3,
      icon: "lock"
    }
  ];
  return {
    users: db,
    privacies
  };
};
