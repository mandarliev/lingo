import { auth } from "@clerk/nextjs";

const adminIds = [
    "user_2e3VxR6HeVEciFXyvaenKzPut7A"
]

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
