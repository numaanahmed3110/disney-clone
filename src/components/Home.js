import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../Firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let trendings = [];
  let newDisneys = [];
  let originals = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((docs) => {
        switch (docs.data().type) {
          case "recommend":
            recommends = [...recommends, { id: docs.id, ...docs.data() }];
            break;
          case "trending":
            trendings = [...trendings, { id: docs.id, ...docs.data() }];
            break;
          case "new":
            newDisneys = [...newDisneys, { id: docs.id, ...docs.data() }];
            break;
          case "original":
            originals = [...originals, { id: docs.id, ...docs.data() }];
            break;
          default:
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          trending: trendings,
          original: originals,
          newDisney: newDisneys,
        })
      );
    });
  }, [dispatch, userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(2vh + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    z-index: -1;
    opacity: 1;
  }
`;

export default Home;
