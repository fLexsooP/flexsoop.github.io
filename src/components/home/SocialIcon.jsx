import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

function SocialIcon(props) {
  const { link, icon, label } = props;
  function getIconComponent(icon) {
    switch (icon) {
      case 'linkedin':
        return <FaLinkedin />;
      case 'facebook':
        return <FaFacebook />;
      case 'github':
        return <FaGithub />;
      case 'twitter':
        return <FaTwitter />;
      default:
        return null; // Return null or a default icon component for unsupported icon names
    }
  }

  const Icon = getIconComponent(icon);
  return (
    <a
      target="_blank"
      aria-label={label}
      rel="noopener noreferrer"
      href={link}>
      {/* <i className={icon} aria-hidden="true"/> */}
      {Icon}
    </a>
  );
}

export default SocialIcon;
