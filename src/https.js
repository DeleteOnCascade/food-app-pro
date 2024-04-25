export async function fetchMeals() {
  const response = await fetch("http://localhost:3000/meals");
  const respData = await response.json();
  if (!response.ok) {
    throw new Error("failed to fetch meals");
  }

  return respData;
}
