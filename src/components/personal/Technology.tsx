import {
  Grid,
  GridItem,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import { SiKotlin, SiMysql, SiSpringboot } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import TechCard from "./TechCard";

export const Technology = () => {
  return (
    <div>
      <Grid
        h="100%"
        templateAreas={`"nav main"`}
        gridTemplateRows={"1fr"}
        gridTemplateColumns={"250px, 1fr"}
        gap={20}
        mb={20}
      >
        <GridItem area={"nav"}>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>Technologieën</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <a href="#html">HTML</a>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <a href="#csharp">C#</a>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <a href="#sql">MySQL</a>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <a href="#java">Java</a>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <a href="#react">React</a>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <a href="#spring">Spring boot</a>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <a href="#python">Python</a>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <a href="#kotlin">Kotlin</a>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </GridItem>
        <GridItem area={"main"}>
          <Stack>
            <Text py={2} px={10}>
              Hieronder kan u alle technologieën zien waar ik kennis in heb. De
              bar geeft aan hoeveel kennis ik er in heb (dit is een ruwe
              schatting omdat deze natuurlijk blijven ontwikkelen).
            </Text>

            <TechCard
              icon={FaHtml5}
              text="HTML ken ik al van mijn 5de middelbaar waar ik ook voor het eerst kennis heb gemaakt met 
              web development, dit was samen met CSS."
              progress={85}
              cardId="html"
            />

            <TechCard
              icon={TbBrandCSharp}
              text="In mijn 5de middelbaar heb ik ook leren programmeren in C#. Dit was in het 5de jaar de 
              basis en in het 6de jaar werd dit wat meer geavanceerd door met Windows Forms te werken enz.
              In mijn 3de en laatste jaar aan HoGent heb ik mijn kennis van C# kunnen uitbreiden door Blazor 
              te gebruiken, dit is gebaseerd op HTML en CSS."
              progress={60}
              cardId="csharp"
            />

            <TechCard
              icon={SiMysql}
              text="In het middelbaar heb ik ook leren werken met databanken. Dit begon met de basis 
              zoals een select-statement uitvoeren of het filteren en sorteren op een tabel. 
              Deze kennis werd dan verder aangevuld aan HoGent: het aanmaken en verwijderen van tabellen, 
              joins gebruiken, transacties, indexen en triggers gebruiken en zelf schrijven."
              progress={70}
              cardId="sql"
            />

            <TechCard
              icon={FaJava}
              text="De kennismaking met Java gebeurde in mijn 1ste jaar aan HoGent. Aangezien ik al wat kennis 
              had van C# en dit er heel hard op leek ging de basis heel vlot."
              progress={55}
              cardId="java"
            />

            <TechCard
              icon={FaReact}
              text="React heb ik in mijn 2de jaar leren kennen en heb ik dan ook direct toegepast in een project. 
              Ik heb kennis leren maken met de React DOM Server, hooks, states en componenten.
              Nu probeer ik deze kennis beetje per beetje bij te schaven door kleine persoonlijke projecten te maken."
              progress={65}
              cardId="react"
            />

            <TechCard
              icon={SiSpringboot}
              text="Nadat ik Java wat onder de knie had zijn we ook beginnen programmeren in Spring. Dit is een 
              web development framework gebaseerd op Java. Dit werd geleerd in mijn 2de jaar en konden we direct 
              toepassen door zelf een kleine website te maken."
              progress={50}
              cardId="spring"
            />

            <TechCard
              icon={FaPython}
              text="In mijn 2de jaar heb ik ook kennis gemaakt met Python. Dit werd geleerd in de context van
              statistieken, kansberekeningen en analyses uitvoeren op variabelen."
              progress={40}
              cardId="python"
            />

            <TechCard
              icon={SiKotlin}
              text="Aangezien mijn specialisatie niet alleen web development is maar ook mobile development 
              heb ik in mijn 3de jaar Kotlin leren gebruiken. Dit werd helemaal op zelfstandige basis, door 
              zelfstudie, geleerd en direct toegepast op een project dat in teamverband voor een echte klant 
              werd gemaakt."
              progress={45}
              cardId="kotlin"
            />
          </Stack>
        </GridItem>
      </Grid>
    </div>
  );
};
