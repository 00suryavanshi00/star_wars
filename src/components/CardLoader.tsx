import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import YodaLoader from './YodaLoader';

export function CardLoader() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      {/* <Card.Section>
        <Image
          src="src/images/peoplebackground.jpg"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="center" mt="md" mb="xs">
        <Text fw={500}>People</Text>
      </Group>

      <Text size="sm" c="dimmed">
        Explore the star wars folks!!
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Let's geek together!
      </Button> */}
      <div className='flex justify-center'>

        <YodaLoader />
      </div>
    </Card>
  );
}



