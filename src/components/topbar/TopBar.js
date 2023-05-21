
import './TopBar.css'
import { Language, Settings } from '@mui/icons-material';
export default function TopBar() {
  return (

    <div class='topbar'>
      <div class="topbarWrapper">
        <div class="topLeft">
          <img src='https://cdn.unito.it/unito-loghi/logo_sigillo_orizzontale.svg' class="logo" />
          <div class="topbarApplication">
            <span class="topbarApplicationTitle">Medici Formazione Specialistica</span>
            <span class="topbarApplicationSubTitle">Archivio Documenti</span>
          </div>
        </div>
        <div class="topRight">
          <div className="topbarIconContainer">
            <Settings />
          </div>
        </div>
      </div>
    </div>
  )
}
