import { useState, useEffect } from 'react'
import styled from 'styled-components';;

const ButtonContainer = styled.span`
  position: fixed;
  bottom: 90px;
  right: 32px;
  align-items: center;
  height: 32px;
  width: 32px;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  opacity: 0.5;
  background: #1890ff;
  border-radius: 4px;
  transition: opacity 0.4s, color ease-in-out 0.2s, background ease-in-out 0.2s;
  display: ${({ isScrollButtonVisible }) =>
    isScrollButtonVisible ? 'flex' : 'none'};

  &:hover {
    opacity: 1;
  }
`;
const Layout = () => {
  const [showScroll, setShowScroll] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

    useEffect(() => {
      const checkScrollHeight = () => {
        if (!showScroll && window.pageYOffset > 300) {
          setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 300) {
          setShowScroll(false);
        }
      };
  
      window.addEventListener('scroll', checkScrollHeight);
      return () => {
        window.removeEventListener('scroll', checkScrollHeight);
      };
    }, [showScroll]);

  return (
    <div>
      <div >
      <div  >
        <h2>React Js onScroll Sticky Header Example</h2>
      </div>
      <div >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lacinia pretium erat ac rutrum.
        </p>
      </div>{console.log(showScroll,"")}
     {/* { showScroll &&<Button onClick={scrollToTop}><img src={arrowUp} ></img></Button>} */}
    </div>
     <ButtonContainer isScrollButtonVisible={showScroll} onClick={scrollToTop}>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </ButtonContainer>
    </div>
  )
}

export default Layout
