import { Card, Group, Text } from '@mantine/core';
import React from 'react'

function NameCard({name}:{name:string}) {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder className='bg-yellow-400 rounded-3xl  hover:scale-110 hover:shadow-md transition-all ease-in-out'>
          {/* <Card.Section>
            <Image
              src = {resourceImageRoutes.get(cardName)}
              height={160}
              alt="Norway"
            />
          </Card.Section>
     */}
          <Group position="center" mt="md" mb="xs">
            <Text fw={500}>{name.toUpperCase()}</Text>
          </Group>
        </Card>
      );
}

export default NameCard
