import { getUserDetails } from './getUserDetails'

async function main() {
  const handles = [
    'basarat',
    'eggheadio',
    'joelhooks'
  ];

  for (const handle of handles) {
    const item = await getUserDetails(handle);
    console.log(`
      Name: ${item.name}
      Location: ${item.location}
    `);
  }
}

main();