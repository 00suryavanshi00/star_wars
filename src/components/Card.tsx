import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export function CardUI() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className='bg-yellow-400 rounded-3xl'>
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

      {/* <Text size="sm" c="dimmed">
        Explore the star wars folks!!
      </Text> */}

      <Button color="blue" fullWidth mt="md" radius="md">
        Let's geek together!
      </Button>
    </Card>
  );
}



// "films": "https://swapi.dev/api/films/",
//     "people": "https://swapi.dev/api/people/",
//     "planets": "https://swapi.dev/api/planets/",
//     "species": "https://swapi.dev/api/species/",
//     "starships": "https://swapi.dev/api/starships/",
//     "vehicles": "https://swapi.dev/api/vehicles/"