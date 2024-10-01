<script setup>
import emailjs from "@emailjs/browser";
import { VForm } from "vuetify/components";

const senderName = ref("");
const to = ref("patilgundu161@gmail.com");
const subject = ref("");
const message = ref("");
const refForm = ref();

const sendEmail = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (valid) {
      emailjs.init("cJWRRMDTWdCIrFXwL");
      const payload = {
        senderName: senderName.value,
        to: to.value,
        subject: subject.value,
        message: message.value,
      };
      var SERVICE_ID = "service_l98dggl";
      var TEMPLATE_ID = "template_noda22x";
      emailjs.send(SERVICE_ID, TEMPLATE_ID, payload).then(
        () => {
          console.log("SUCCESS!");
          resetForm();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    }
  });
};

const resetForm = () => {
  nextTick(() => {
    refForm.value?.reset();
    refForm.value?.resetValidation();
  });
};
</script>

<template>
  <div>
    <VCol cols="12" sm="12" class="px-16" id="contact">
      <VRow>
        <VCol cols="12" sm="4">
          <div class="child">
            <h1>Contact info.</h1>
            <VBtn icon="mdi-linkedin" class="mt-10" variant="outlined"></VBtn
            ><br />
            <span class="text-caption">Connect me on Linkedin</span><br />
            <VBtn icon="mdi-cellphone" class="mt-10" variant="outlined"></VBtn
            ><br />
            <span class="text-caption">+91 9739695265</span><br />
            <VBtn
              icon="mdi-email-outline"
              class="mt-10"
              variant="outlined"
            ></VBtn
            ><br />
            <span class="text-caption">iamgundu95@gmail.com</span><br />
          </div>
        </VCol>
        <VCol cols="12" sm="8">
          <h1>Send your message</h1>
          <VDivider />
          <span class="text-caption"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            enim similique molestiae dolorum facere saepe eligendi, cupiditate
            autem at ipsum nobis vitae accusantium consectetur eos hic alias?
            Iusto eligendi perferendis dignissimos asperiores cupiditate culpa
            ipsa saepe nostrum et eum velit blanditiis est maxime quisquam cum
            similique odit labore, ex error?</span
          >
          <VForm @submit.prevent="sendEmail" ref="refForm">
            <VRow class="mt-10">
              <VCol cols="12" sm="6">
                <VTextField
                  v-model="to"
                  label="You are sending your message to"
                  persistent-hint
                  variant="outlined"
                  disabled
                ></VTextField>
              </VCol>
            </VRow>
            <VRow>
              <VCol cols="12" sm="6">
                <VTextField
                  v-model="senderName"
                  label="Company Name"
                  persistent-hint
                  variant="outlined"
                ></VTextField>
              </VCol>
              <VCol cols="12" sm="6">
                <VTextField
                  v-model="subject"
                  label="Role you are looking for"
                  persistent-hint
                  variant="outlined"
                ></VTextField>
              </VCol>
            </VRow>
            <VRow>
              <VCol>
                <VTextarea
                  v-model="message"
                  label="Message"
                  persistent-hint
                  variant="outlined"
                >
                </VTextarea>
              </VCol>
              <!-- <VCol><VTextarea id="modal-text"></VTextarea></VCol> -->
            </VRow>
            <VBtn type="submit">Submit</VBtn>
          </VForm>
        </VCol>
      </VRow>
    </VCol>
  </div>
</template>

<style lang="scss" scoped></style>
