export default async function GetGamelist(language) {
  try {
    const res = await fetch(
      `https://smakermicsvc.back138.com/api/opgateway/v1/op/demo/GameList?opId=kkgaming&lang=${language}`,
      { cache: "no-store" }
    );
    const games = await res.json();
    return games;
  } catch (e) {
    console.log(e);
  }
}
