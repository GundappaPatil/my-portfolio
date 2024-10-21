<script setup lang="ts">
import emailjs from "@emailjs/browser";
import { ref, nextTick } from "vue";
import { VForm } from "vuetify/components";
import { toast, type ToastOptions } from "vue3-toastify";

interface FormType {
  errors: [];
  valid: boolean;
}

const options = {
  autoClose: 5000,
  position: toast.POSITION.TOP_CENTER,
} as ToastOptions;

const senderName = ref("");
const to = ref("iamgundu95@gmail.com");
const subject = ref("");
const message = ref("");
const refForm = ref();

const rules = {
  required: (v: string) => !!v || "This field is required",
};

const sendEmail = async () => {
  refForm.value?.validate().then((valid: FormType) => {
    if (!valid?.valid) {
      toast.error("Please fill the required fields", options as ToastOptions);
      console.log("valid", valid);
      return;
    }
    console.log("valid", valid);
    console.log("form is valid");
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
        toast.success("Successfully sent an email", options as ToastOptions);
        resetForm();
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
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
  <div class="h-screen mt-16">
    <VCol cols="12" sm="12" class="px-16" id="contact">
      <VRow>
        <VCol cols="12" sm="4">
          <div class="child">
            <h1>Contact info.</h1>
            <!-- Contact Info Buttons -->
            <VBtn
              icon="mdi-linkedin"
              color="blue"
              class="mt-10"
              variant="outlined"
            ></VBtn
            ><br />
            <span class="text-caption">Connect me on Linkedin</span><br />
            <VBtn icon="mdi-cellphone" class="mt-10" variant="outlined"></VBtn
            ><br />
            <span class="text-caption">+91 9739695265</span><br />
            <VBtn
              icon="mdi-email-outline"
              color="red"
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
                  label="Company Name*"
                  persistent-hint
                  variant="outlined"
                  :rules="[rules.required]"
                ></VTextField>
              </VCol>
              <VCol cols="12" sm="6">
                <VTextField
                  v-model="subject"
                  label="Role you are looking for*"
                  persistent-hint
                  variant="outlined"
                  :rules="[rules.required]"
                ></VTextField>
              </VCol>
            </VRow>
            <VRow>
              <VCol>
                <VTextarea
                  v-model="message"
                  label="Message*"
                  persistent-hint
                  variant="outlined"
                  :rules="[rules.required]"
                ></VTextarea>
              </VCol>
            </VRow>
            <VBtn class="mt-2 bg-yellow" type="submit">Submit</VBtn>
          </VForm>
        </VCol>
      </VRow>
    </VCol>
  </div>
</template>

<style lang="scss" scoped></style>
