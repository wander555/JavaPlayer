<script>
// script
import myVideo from "vue-video";
export default {
  data() {
    return {
      video: {
        sources: [
          {
            src: "http://covteam.u.qiniudn.com/oceans.mp4",
            type: "video/mp4",
          },
        ],
        options: {
          autoplay: true,
          volume: 0.6,
          poster: "http://covteam.u.qiniudn.com/poster.png",
        },
      },
    };
  },
  components: {
    myVideo,
  },
};
</script>
