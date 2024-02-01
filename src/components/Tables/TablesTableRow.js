import {
  Avatar,
  Badge,
  Button,
  Flex,
  Switch,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function TablesTableRow(props) {
  const {
    subdomain,
    budget,
    strategy,
    results,
    range,
    frequency,
    cost,
  } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr style={{ opacity: budget === "Desativado" ? 0.5 : 1 }}>
      <Td>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Switch id="email-alerts" />
          </Flex>
        </Flex>
      </Td>

      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="normal">
            {budget}
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {subdomain}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="normal">
          {strategy}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="normal" pb=".5rem">
          {results}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="normal">
          {range}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="normal">
          {frequency}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="normal">
          {cost}
        </Text>
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
