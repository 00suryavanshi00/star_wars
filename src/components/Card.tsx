import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export function CardUI({ cardNumber} : {cardNumber : number}) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className='bg-yellow-400 rounded-3xl  hover:scale-110 hover:shadow-md transition-all ease-in-out'>
      <Card.Section>
        <Image
          src="src/images/peoplebackground.jpg"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="center" mt="md" mb="xs">
        <Text fw={500}>People</Text>
      </Group>

{/* 
      <Button color="blue" fullWidth mt="md" radius="md">
      Card Number: {cardNumber}
      </Button> */}
    </Card>
  );
}



// "films": "https://swapi.dev/api/films/",
//     "people": "https://swapi.dev/api/people/",
//     "planets": "https://swapi.dev/api/planets/",
//     "species": "https://swapi.dev/api/species/",
//     "starships": "https://swapi.dev/api/starships/",
//     "vehicles": "https://swapi.dev/api/vehicles/"