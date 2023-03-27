import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container as ContainerBase, ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionDescription } from "components/misc/Typography";

function SuccessPage({roundedHeaderButton = false})  {



const Container = tw(ContainerBase)`
  h-screen w-full
  bg-primary-900 text-gray-100
  flex flex-col justify-center items-center
`;



const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl`;
const Subheading = tw(SubheadingBase)`text-gray-100 text-center`;
const Description = tw(SectionDescription)`text-gray-400 text-center mx-auto max-w-screen-md`;
//const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;
const SubmitButton = tw.button`mx-auto block w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;


const StatsContainer = tw.div`mt-8 flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-screen-md justify-between mx-auto`
const Stat = tw.div`flex flex-col text-center p-4 tracking-wide`
const StatKey = tw.div`text-xl font-medium`
//const StatValue = tw.div`text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black`
const StatValue = tw.div`text-base sm:text-sm md:text-base lg:text-lg font-black`


    const formDataFromContactUs = useLocation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(formDataFromContactUs.state.submittedData || "");

    const subheading = "";
    const thankYouMessage = "Thank you for reaching out!";
    const description = "Our team will reach out to you shortly on:";
    const stats = [
      {
        key: "Ph. No.",
        value: formData.number,
      },
      {
        key: "E-mail",
        value: formData.email,
      },
    ]

    return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          <Heading>{"Hey "+formData.name+","}</Heading>
          <Heading>{thankYouMessage}</Heading>
          {description && <Description>{description}</Description>}
          <Subheading>{formData.email+ " & "+formData.number}</Subheading>
        <br/>
        <br/>
        <br/>
        <Subheading>{"Filled the form incorrectly?"}</Subheading>
        <Subheading>{"Click the button below to go back to the form."}</Subheading>
        <br/>
        <br/>
        <SubmitButton onClick={() => navigate('/')}>Go Back</SubmitButton>
        <br/>
        </HeadingContainer>
      </ContentWithPaddingXl>
      </Container>
    );
}

export default SuccessPage;

