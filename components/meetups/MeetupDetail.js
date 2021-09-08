import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export async function getStaticPaths() {
  // fetch data for for each meetup.

  return {
    fallback: true, // false generate 404, true means it will try to generate dynamically if not defined below.
    paths: [
      {
        params: {
          meetupId: meetupId1,
        },
        params: {
          meetupId: meetupId1,
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup.

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        id: meetupId,
        title: "A First Meetup",
        address: "Some Address",
        description: "This is first meetup.",
      },
    },
  };
}
export default MeetupDetail;
