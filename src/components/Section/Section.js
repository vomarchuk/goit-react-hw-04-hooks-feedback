import PropTypes from 'prop-types';
import s from './Section.module.css';
import Container from '../Container';

const Section = ({ title, children }) => {
  return (
    <Container>
      <section className={s.section}>
        {title && <h1 className={s.title}>{title}</h1>}
        {children}
      </section>
    </Container>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
