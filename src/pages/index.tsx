import CardItem from "../components/CardItem";
import Main from "../layouts/Main";
import SectionList from "../parts/SectionList";

const SearchInput: React.FC = () => {
  return <div>asd</div>;
};

const Index = () => {
  return (
    <Main>
      <SectionList sectionName="list" appendElement={SearchInput}>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
      </SectionList>
    </Main>
  );
};

export default Index;
