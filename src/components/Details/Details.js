import styles from "./Details.module.css";

const Details = (props) => {
  let isOpened = props.opened;

  const details = () => {
    <div id={styles.detailsContainer} >
      <h1>Hello!</h1>
    </div>;
  };
  console.log(isOpened);
  
  return <div> {isOpened ? 'fdvcz' : null} </div>;
};

export default Details;
