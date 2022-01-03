import React from "react";
import PropTypes from "prop-types";
import { styled } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import { Tab, Nav, Col, Row } from "react-bootstrap";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2} style={{ textAlign: "justify" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#e6951a",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

export default function IndexTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        variant="scrollable"
        centered
      >
        <StyledTab label="Our Story" />
        <StyledTab label="Our Adventages" />
        <StyledTab label="Quarry Stone" />
        <StyledTab label="Production" />
        <StyledTab label="Shipping and Packaging" />
      </StyledTabs>
      <TabPanel value={value} index={0}>
        <h3>Masuk Sini</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          praesentium magnam ipsa laudantium fugiat, iusto doloribus libero
          dignissimos recusandae esse amet quis nisi nostrum ut nulla,
          aspernatur vero! Officiis perferendis rerum inventore reprehenderit
          impedit eligendi eos magni autem libero vero! Doloribus cumque animi
          ducimus, cum ipsam eaque! Harum, odio cumque? Suscipit laudantium
          debitis, tenetur quia ex quod dolorum quae. Ex sequi explicabo sint
          maiores, adipisci modi animi rem inventore nostrum impedit eligendi
          dolorum vitae, aliquid quo dolore! Tempora similique ducimus ipsam ad
          eum dicta, cupiditate harum sit atque repudiandae. Cumque molestias
          animi quo similique blanditiis eligendi accusamus corrupti dolore
          deleniti saepe facilis, voluptatibus quod cum aliquid porro pariatur,
          inventore culpa rem soluta illo nihil dignissimos nisi. Animi facere
          voluptatem reiciendis qui officia ea, exercitationem dignissimos
          asperiores dolorem beatae temporibus adipisci suscipit laborum ex
          veritatis, ab autem cumque omnis odio eaque libero. Animi nihil
          consequuntur voluptas ea reiciendis at dolores earum obcaecati, fugiat
          magni praesentium id voluptates rem amet. Doloremque deserunt
          repudiandae impedit ducimus incidunt obcaecati doloribus
          reprehenderit. Quasi, autem quam labore ipsam accusantium distinctio,
          minima neque fugiat consequatur natus deserunt, reprehenderit dolores
          voluptatem excepturi a. Omnis placeat, accusantium saepe dicta
          praesentium deleniti dolorem vitae quod dolor veritatis! Ex debitis
          cupiditate omnis consectetur aspernatur! Quo quis illo voluptate
          adipisci vitae eum quae ducimus mollitia nostrum libero, rerum
          explicabo pariatur tenetur facilis sint nisi aut deserunt maiores.
          Distinctio ab, iusto dolore esse sed maxime tempora modi iste beatae
          officia culpa facere animi? Enim sunt non consequuntur minus repellat,
          quasi maxime consectetur nam minima atque neque quos repudiandae
          laboriosam dignissimos rem officiis fugit obcaecati eos quod veniam
          explicabo dicta quam nisi doloremque! Qui, fugiat necessitatibus!
          Consectetur, doloribus sint aliquid ea repellendus voluptas dolores
          ullam cumque assumenda, corrupti maxime consequatur. Quod corporis nam
          dolor ducimus possimus hic dicta saepe corrupti? At, dolores impedit
          quidem ipsa voluptas officiis qui recusandae quasi alias non fugit in
          provident accusantium harum pariatur ullam. Doloribus itaque dolorum
          labore temporibus, autem fuga. At ullam dolore necessitatibus suscipit
          optio, fugit adipisci laborum libero excepturi! Cupiditate explicabo,
          assumenda praesentium eligendi voluptatibus sapiente id debitis error
          sit iste perferendis natus, quas neque, distinctio odio quam
          doloribus? Nostrum earum itaque saepe nisi debitis aperiam eveniet
          soluta hic cumque quod quam molestiae quaerat quis atque sint aut
          minus, sapiente eius quia ipsa ratione tempora reiciendis. Delectus
          fuga quod, laudantium nihil deserunt perferendis repudiandae voluptate
          necessitatibus asperiores adipisci recusandae nulla pariatur
          provident, voluptatibus quos alias dicta eos aut dolorem reprehenderit
          aliquid debitis! Laborum quos laudantium voluptates rem, accusamus
          sequi fuga culpa, molestiae vero, commodi neque assumenda. Velit
          similique vitae sunt nostrum. Molestiae culpa necessitatibus, ipsa
          beatae voluptatem at accusantium error aut? Nobis optio quasi maxime
          aspernatur repellendus a praesentium eos. Dolor ipsum excepturi neque
          at maxime tenetur minima, mollitia ullam quam vel tempore cum
          perspiciatis nostrum nihil fugit cumque nam aut iste quos! Aut
          repellat nobis saepe id tenetur optio facere tempore explicabo cumque
          et maiores numquam cum corrupti ipsa minima vero, aspernatur sit minus
          ipsam quod voluptatum quia? Dolorum incidunt delectus a sequi ab ullam
          esse voluptas pariatur ut quia, iusto repellat accusamus sunt aliquid
          fugiat facilis, maiores illum atque ipsum voluptatum sapiente.
          Voluptatum in sint nam quos blanditiis ipsa odio iste optio! Laborum,
          est? Perspiciatis rem harum voluptatibus eius provident nam? Expedita
          praesentium debitis porro placeat fugiat. Quibusdam fugiat voluptates,
          qui dicta quaerat non maxime est necessitatibus temporibus facilis
          possimus enim eos dignissimos ut itaque quo, aperiam fugit soluta ipsa
          labore earum odit amet doloremque adipisci? Delectus suscipit illo
          ratione! Commodi quos iure dolor odit minima perferendis ut eos ipsam
          veritatis consequatur? Nobis laudantium hic architecto ullam.
          Distinctio labore exercitationem est debitis aut aspernatur aliquid
          nobis perspiciatis? Nam animi natus, provident earum ipsa fugiat ullam
          unde iste, amet aliquid temporibus facilis id? Dolorum quibusdam
          cupiditate vero dolore magnam accusantium, excepturi vel dolorem
          doloribus porro laudantium praesentium repudiandae dignissimos harum
          iusto quis explicabo accusamus sit cumque, odit ipsum ducimus
          reprehenderit corporis quas! Mollitia at natus iure cumque illo, vero
          aliquam sed a maxime reiciendis. Non, hic placeat. Unde expedita
          reiciendis rem eos tempora iusto. Accusantium natus architecto, iusto
          voluptatem reprehenderit est perferendis laudantium. Voluptas possimus
          corrupti, odit nemo reprehenderit ea blanditiis dignissimos enim et
          harum, odio accusantium ratione vero cumque. Rem repellat quos
          reiciendis quas veritatis voluptates ipsam ducimus deserunt aut,
          asperiores tempore facere cum soluta perspiciatis iste quibusdam eum
          nam. Sapiente, exercitationem quam. Earum repudiandae consequuntur
          illum labore dolor nemo est ex debitis aut deserunt facere quia,
          eligendi accusantium voluptatum obcaecati sequi cumque voluptatem
          commodi maxime neque corrupti beatae! Quasi harum dolore
          necessitatibus ex, maxime reprehenderit sit natus, ullam nemo mollitia
          laboriosam! Laudantium, suscipit aspernatur! Voluptatem recusandae
          blanditiis nemo. Esse illo molestiae dolores. Dicta inventore in
          aliquam, magni totam asperiores dolore earum ullam, minima voluptatum
          illo pariatur quidem quae ipsum quia distinctio possimus eligendi quis
          at necessitatibus delectus? Tenetur odio vitae quaerat dignissimos
          suscipit, quibusdam alias architecto maxime quas obcaecati vel commodi
          amet voluptatibus, aliquam reiciendis. Et, provident necessitatibus?
          Officia quo sapiente eum. Maxime ad laborum laudantium ut fugiat
          voluptates a nemo nostrum sint voluptas aut impedit reprehenderit
          eaque, corporis vel velit sequi in. Expedita porro magni perferendis
          repellat debitis, dolor delectus ducimus quam placeat fugit,
          repudiandae necessitatibus a aperiam sunt laboriosam nisi molestiae
          eum fugiat nesciunt voluptas hic dolorem. Ut aperiam quasi accusamus
          perspiciatis cumque nesciunt adipisci magnam voluptas placeat
          doloribus. Nobis dolores illum a vitae. Adipisci ex at velit
          perspiciatis obcaecati, dolores odio quis dolorum alias reprehenderit
          quam id vitae optio aut quaerat. Dolor autem alias minima unde aperiam
          reiciendis exercitationem cum tempora ratione minus ab veritatis fugit
          dolorem non aspernatur ipsum, molestias delectus, nihil consectetur
          possimus saepe soluta, amet odio. Officia quisquam quia delectus fuga
          temporibus, optio itaque quaerat, accusamus nam provident corrupti
          magnam similique est mollitia quis minima nisi cum perferendis
          suscipit illo eius repellat? Iure accusantium temporibus cumque vero
          aspernatur sed rem modi ullam quos suscipit nostrum repellendus saepe
          neque, vitae iusto delectus dolorem explicabo harum aliquid excepturi
          in quisquam reprehenderit odit. Praesentium, rerum. Quisquam quia
          provident repellat. Tempore porro quisquam deleniti ex dolorum a
          repellat, dignissimos excepturi expedita?
        </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h3>Masuk Sini</h3>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h3>Masuk Sini</h3>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h3>Masuk Sini</h3>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h3>Masuk Sini</h3>
      </TabPanel>
    </div>
  );
}
