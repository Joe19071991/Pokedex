async function getData(): Promise<void> {
  const response: Response = await fetch(
    "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
  );
  const data: { pokemon: any[] } = await response.json();
  let poke: any[] = data.pokemon;
  console.log(poke);
}

getData();
