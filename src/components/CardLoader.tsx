import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import YodaLoader from './YodaLoader';

export function CardLoader() {
  return (
    // <Card shadow="sm" padding="lg" radius="md" withBorder>
    //   <div className='flex justify-center'>
    //     <YodaLoader />
    //   </div>
    // </Card>
    <Card shadow="sm" padding="xl" radius="md" withBorder className='bg-yellow-400 rounded-3xl  hover:scale-110 hover:shadow-md transition-all ease-in-out flex flex-col items-center w-1/4'>
      <Card.Section>
        <YodaLoader/>
      </Card.Section>

      {/* <Group position="center" mt="md" mb="xs">
        <Text fw={500}>Loading...</Text>
      </Group> */}
    </Card>
  );
}



