import styled from "styled-components";

type LoadingProps = {
    width: string;
    height: string;
}

const Loading: React.FC<LoadingProps> = (props) => {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          background: "none",
          display: "block",
          shapeRendering: "auto",
        }}
        width={props.width}
        height={props.height}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <rect x="19" y="19" width="20" height="20" fill="#85a2b6">
          <animate
            attributeName="fill"
            values="#bbcedd;#85a2b6;#85a2b6"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
            calcMode="discrete"
          ></animate>
        </rect>
        <rect x="40" y="19" width="20" height="20" fill="#85a2b6">
          <animate
            attributeName="fill"
            values="#bbcedd;#85a2b6;#85a2b6"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.125s"
            calcMode="discrete"
          ></animate>
        </rect>
        <rect x="61" y="19" width="20" height="20" fill="#85a2b6">
          <animate
            attributeName="fill"
            values="#bbcedd;#85a2b6;#85a2b6"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.25s"
            calcMode="discrete"
          ></animate>
        </rect>
        <rect x="19" y="40" width="20" height="20" fill="#85a2b6">
          <animate
            attributeName="fill"
            values="#bbcedd;#85a2b6;#85a2b6"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.875s"
            calcMode="discrete"
          ></animate>
        </rect>
        <rect x="61" y="40" width="20" height="20" fill="#85a2b6">
          <animate
            attributeName="fill"
            values="#bbcedd;#85a2b6;#85a2b6"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.375s"
            calcMode="discrete"
          ></animate>
        </rect>
        <rect x="19" y="61" width="20" height="20" fill="#85a2b6">
          <animate
            attributeName="fill"
            values="#bbcedd;#85a2b6;#85a2b6"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.75s"
            calcMode="discrete"
          ></animate>
        </rect>
        <rect x="40" y="61" width="20" height="20" fill="#85a2b6">
          <animate
            attributeName="fill"
            values="#bbcedd;#85a2b6;#85a2b6"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.625s"
            calcMode="discrete"
          ></animate>
        </rect>
        <rect x="61" y="61" width="20" height="20" fill="#85a2b6">
          <animate
            attributeName="fill"
            values="#bbcedd;#85a2b6;#85a2b6"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.5s"
            calcMode="discrete"
          ></animate>
        </rect>
      </svg>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default Loading;
