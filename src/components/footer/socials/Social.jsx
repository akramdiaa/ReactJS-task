import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Social.scss';

const Social = () => {
  return (
    <div className="social-container">
      <IconButton 
        href="https://linkedin.com/in/your-profile" 
        target="_blank"
        className="social-icon"
      >
        <LinkedInIcon />
      </IconButton>

      <IconButton 
        href="https://github.com/your-username" 
        target="_blank"
        className="social-icon"
      >
        <GitHubIcon />
      </IconButton>

      <IconButton 
        href="https://your-website.com" 
        target="_blank"
        className="social-icon"
      >
        <LanguageIcon />
      </IconButton>

      <IconButton 
        href="https://facebook.com/your-profile" 
        target="_blank"
        className="social-icon"
      >
        <FacebookIcon />
      </IconButton>
    </div>
  );
};

export default Social;