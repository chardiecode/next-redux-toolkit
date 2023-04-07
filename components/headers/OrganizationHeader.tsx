import Link from "next/link";

function OrganizationHeader() {
  return (
    <>
      <Link href="/organization/players">Players</Link>
      <br />
      <Link href="/organization/payments">Payments</Link>
      <br />
      <Link href="/organization/info">Info</Link>
    </>
  );
}

export default OrganizationHeader;
