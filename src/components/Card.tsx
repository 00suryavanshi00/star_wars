import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

interface CardUIProps {
  cardUri: string;
  cardName: string;
}


export function CardUI({ cardUri, cardName }: CardUIProps) {
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
        <Text fw={500}>{cardName}</Text>
      </Group>
    </Card>
  );
}