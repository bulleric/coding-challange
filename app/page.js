// The home component will contain the feed and eventually the CategoryFilter component
import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="mt-24 sm:mt-20 px-6 sm:px-12">
      <Feed />
    </section>
  );
};

export default Home;