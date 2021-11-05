// src/pages/example
export default function Example({ someProps }) {
  return (
    <StandardPage
      backgroundColor="pale-blue"
      meta={{
        // seo shenanigans
        title: someProps.title,
      }}
    >
      <ExampleScene {...props} />
    </StandardPage>
  );
}

// (also getServerSideProps, getStaticProps, etc.)
